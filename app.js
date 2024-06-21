const form = document.querySelector(".form-quizz");
let tableauResultats = [];
const reponses = ["c", "a", "b", "c", "c", "a", "b", "c", "a"];
const titreResulat = document.querySelector(".resultats h2");
const texteResulat = document.querySelector(".note");
const aideResulat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".question-block");
let verifTableau = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (i = 1; i <= 9; i++) { 
    tableauResultats.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  verifFunc(tableauResultats);
  tableauResultats = [];
}); 

function verifFunc(tabResultats) {
  for (let a = 0; a < 9; a++) {
    if (tabResultats[a] === reponses[a]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }
  afficherResultats(verifTableau);
  couleursfonction(verifTableau);
  verifTableau = [];
}
function afficherResultats(tabCheck) {
  const nbdFautes = tabCheck.filter((el) => el !== true).length;
  switch (nbdFautes) {
    case 0:
      titreResulat.innerText = ` Omedetto!`;
      aideResulat.innerText = "";
      texteResulat.innerText = "0/9";
      break;
    case 1:
      titreResulat.innerText = `Vous y êtes presque! UwU`;
      aideResulat.innerText =
        "Retentez une autre réponse dans la case rouge ,puis re-validez!";
      texteResulat.innerText = "1/9";
      break;
    case 2:
      titreResulat.innerText = `Encore un effort TwT`;
      aideResulat.innerText =
        "Retentez une autre réponse dans les cases rouges ,puis re-validez!";
      texteResulat.innerText = "2/9";
      break;
    case 3:
      titreResulat.innerText = `Vous allez y arriver nhuhu`;
      aideResulat.innerText =
        "Retentez une autre réponse dans les cases rouges ,puis re-validez!";
      texteResulat.innerText = "3/9";
      break;
    case 4:
      titreResulat.innerText = `Corrigez vos erreurs "_"`;
      aideResulat.innerText =
        "Retentez une autre réponse dans les cases rouges ,puis re-validez!";
      texteResulat.innerText = "4/9";
      break;
    case 5:
      titreResulat.innerText = `Je vous conseille de regarder des animes TwT`;
      aideResulat.innerText =
        "Retentez une autre réponse dans les cases rouges ,puis re-validez!";
      texteResulat.innerText = "5/9";
      break;
    case 6:
      titreResulat.innerText = `N'abandonnez pas :)`;
      aideResulat.innerText =
        "Retentez une autre réponse dans les cases rouges ,puis re-validez!";
      texteResulat.innerText = "6/9";
      break;
    case 7:
      titreResulat.innerText = `"_"`;
      aideResulat.innerText =
        "Retentez une autre réponse dans les cases rouges ,puis re-validez!";
      texteResulat.innerText = "7/9";
      break;
    case 8:
      titreResulat.innerText = `:(`;
      aideResulat.innerText =
        "Retentez une autre réponse dans les cases rouges ,puis re-validez!";
      texteResulat.innerText = "8/9";
      break;
    case 9:
      titreResulat.innerText = `Trop de rouge tue `;
      aideResulat.innerText =
        "Retentez une autre réponse dans les cases rouges ,puis re-validez!";
      texteResulat.innerText = "9/9";
      break;
    default:
      "oops cas inattendu";
  }
}
function couleursfonction(tabValBool) {
  for (let j = 0; j < tabValBool.length; j++) {
    if (tabValBool[j] === true) {
      toutesLesQuestions[j].style.background = " #6afc6a";
    } else {
      toutesLesQuestions[j].style.background = "#CC3333";
      toutesLesQuestions[j].classList.add("echec");

      setTimeout(() => {
        toutesLesQuestions[j].classList.remove("echec");
      }, 1000);
    }
  }
}
toutesLesQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "#ffffff54";
  });
});
