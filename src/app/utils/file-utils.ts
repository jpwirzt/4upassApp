export class FileUtils {
  static downloadExcelFile(data: number[], name: string, incluir_fecha_descarga: boolean = true): void {
    this.downloadFile(data, name, 'xlsx', incluir_fecha_descarga);
  }

  static downloadPdfFile(data: number[], name: string): void {
    this.downloadFile(data, name, 'pdf');
  }

  static downloadExcelFileLiquidacion(data: number[], name: string): void {
    this.downloadFileLiquidacion(data, name, 'xlsx');
  }

  private static downloadFileLiquidacion(data: number[], name: string, format: string): void {
    const link = document.createElement('a');
    link.download = `${name}.${format}`; // Usa el nombre exacto pasado desde el frontend
    link.href = 'data:application/octet-stream;base64,' + data;
    document.body.appendChild(link); // Necesario para Firefox
    link.click();
    document.body.removeChild(link);
  }

  private static downloadFile(data: number[], name: string, format: string, incluir_fecha_descarga: boolean = true): void {
    const link = document.createElement('a');
    const date = new Date();
    const day = date.getDate();
    const formatDay = (day < 10 ? '0' : '') + day;
    const month = date.getMonth() + 1;
    const formatMonth = (month < 10 ? '0' : '') + month;
    const year = date.getFullYear();
    const today = incluir_fecha_descarga ? `_${formatDay}-${formatMonth}-${year}` : '';
    link.download = `${name}${today}.${format}`;
    link.href = 'data:application/octet-stream;base64,' + data;
    document.body.appendChild(link); // Needed for Firefox
    link.click();
    document.body.removeChild(link);
  }

  static downloadFileExcel() {
    const link = document.createElement('a');
    link.href = 'assets/excelPlantilla/TicketsExcelPlantilla.xlsx';
    link.download = 'TicketsPlantillaExcel.xlsx';
    link.click();
  }

  static capitalizarNombre(nombre: string): string {
    return nombre
      .split(' ')
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
      .join(' ');
  }
}
