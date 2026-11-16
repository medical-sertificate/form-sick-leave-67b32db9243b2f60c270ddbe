function check(event) {
  event.preventDefault();
  const codeInput = document.getElementById("pwd");
  const userCode = codeInput.value.trim();

  if (userCode == 4867) {
    document.querySelector(".box").style.display = "none";
    const pdfFrame = document.getElementById("pdf-frame");
    pdfFrame.src = "./form/67b32db9243b2f60c270ddbe.pdf";
    document.getElementById("pdf-container").style.display = "block";
  }
}
