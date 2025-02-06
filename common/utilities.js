function createCSV(csv, filename) {
  var csvFile;
  var downloadlink;

  csvFile = new Blob([csv], { type: "text/csv" });

  downloadlink = document.createElement("a");

  downloadlink.download = filename;

  downloadlink.href = window.URL.createObjectURL(csvFile);

  downloadlink.style.display = "none";

  document.body.appendChild(downloadlink);

  downloadlink.click();
}
