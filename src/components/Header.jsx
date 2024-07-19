import logoimg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logoimg} alt="Quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
