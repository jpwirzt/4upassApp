export class GrayImage{
    static dataURLToBlob(dataURL: string): Blob {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      }
    
    static convertToGrayScale(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              if (ctx) {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
    
                // Obtener los datos de la imagen
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
    
                // Convertir cada píxel a escala de grises
                for (let i = 0; i < data.length; i += 4) {
                  const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                  data[i] = data[i + 1] = data[i + 2] = avg;
                }
                ctx.putImageData(imageData, 0, 0);
    
                // Convertir el canvas a una URL de imagen
                resolve(canvas.toDataURL('image/png'));
              } else {
                reject('No se pudo obtener el contexto del canvas');
              }
            };
            img.src = event.target.result;
          };
          reader.readAsDataURL(file);
        });
      }
}