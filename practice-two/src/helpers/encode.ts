/**
 * Convert file image to base 64
 * @param file file image
 * @returns promise
 */
export const convertBase64 = (file: any) => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.onload = () => {
    resolve(fileReader.result);
  };

  fileReader.onerror = (error) => {
    reject(error);
  };
});
