import { useState, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleCheck = () => {
    if (!formRef.current) return;

    const checkboxes = Array.from(
      formRef.current.querySelectorAll('input[type="checkbox"]')
    ).map((checkbox) => checkbox as HTMLInputElement);

    const hasChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );
    setShowResult(hasChecked);
    setClicked(true);
  };
  return (
    <div>
      <hgroup>
        <h1>闇バイト簡易チェッカー</h1>
        <h2>あなたの始めようとしているバイトは安全ですか？</h2>
        <p>
          ※当サイトは簡易に判定するものであり、真偽を保証するものではありません。
        </p>
      </hgroup>

      <FormGroup ref={formRef}>
        <FormControlLabel control={<Checkbox />} label="怪しいと感じますか？" />
        <FormControlLabel
          control={<Checkbox />}
          label="SNSで見つけたものではありませんか？"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="連絡手段がSNSのみですか？"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="給料が高すぎませんか？"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="ホワイトであることを謳っていますか？"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="募集内容が不明瞭ですか？"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="「叩き」「逃げ」「運び」「掛け」「受け」「出し」「取り」「UD」などの文言が含まれていませんか？"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="性別が限定されていませんか？"
        />
      </FormGroup>

      <Button variant="contained" onClick={handleCheck}>
        判定
      </Button>

      {showResult ? (
        <p>
          このバイトは怪しい可能性があります。より慎重に検討することをお勧めします。
        </p>
      ) : clicked ? (
        <p>
          特に怪しい点は見当たりません。ただし、求人情報は十分に確認することをお勧めします。
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
