import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint,CapacitorBarcodeScannerCameraDirection,
CapacitorBarcodeScannerScanOrientation,CapacitorBarcodeScannerAndroidScanningLibrary} from '@capacitor/barcode-scanner';
import { IonicModule } from '@ionic/angular';
import { Observable, Subject, throttleTime } from 'rxjs';


@Component({
  selector: 'app-qr',
   standalone: true,
  imports: [CommonModule,IonicModule],
  template: ``,
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent implements OnInit {

  @Input() encendido: boolean = false;
  @Output() valor = new EventEmitter<string>();
  @Output() devices = new EventEmitter<MediaDeviceInfo[]>();

  private data = new Subject<string>();
  protected device: MediaDeviceInfo | undefined = undefined;
  scannedResult: string | null = null;

  ngOnInit() {

    this.data.pipe(throttleTime(1000))
    .subscribe((value) => this.valor.emit(value));
      
  }
  
  async scanBarcode() {
  
   try {
     const result = await CapacitorBarcodeScanner.scanBarcode({
       hint: CapacitorBarcodeScannerTypeHint.QR_CODE,
       scanInstructions: 'Apunta el QR',
       scanButton: false,
       scanText: '',
       cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK,
       scanOrientation: CapacitorBarcodeScannerScanOrientation.ADAPTIVE,
       android: {
         scanningLibrary: CapacitorBarcodeScannerAndroidScanningLibrary.ZXING
       },
       web: {
         showCameraSelection: true,
         scannerFPS: 60
       }
     });
  
     
    if (result && result.ScanResult) {
      this.scannedResult = result.ScanResult;
      this.valor.emit(result.ScanResult);
    } else {
      this.scannedResult = 'No se detectó ningún código.';
    }
    } catch (error) {
      console.error('Error al escanear:', error);
      this.scannedResult = 'Error durante el escaneo.';
    }
  }

  protected emitDevices(devs: MediaDeviceInfo[]): void {
    this.devices.emit(devs);
  }

  activarCamara(): void {
    this.encendido = true;
    this.scanBarcode();
  }

  desactivarCamara() {
    this.encendido = false;
  }

  cambiarCamara(camara: MediaDeviceInfo) {
    if (camara?.deviceId == this.device?.deviceId) return;
    this.device = camara;
  }

  protected scan(value: string) {
    this.data.next(value);
  }

}
