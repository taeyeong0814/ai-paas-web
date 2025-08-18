import { useState } from "react";
import { Button, Input, Password } from "innogrid-ui";
import type { ChangeEvent } from "innogrid-ui";

import Logo from "../../assets/img/header/logo.svg";

import styles from "./login.module.scss";

export default function LoginPage() {
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  //password
  const [value2, setValue2] = useState<string>("");

  return (
    <main className={styles.loginMain}>
      <div className={styles.loginBox}>
        <div>
          <Logo />
        </div>
        <p>로그인</p>
        <div className={styles.loginInputBox}>
          <div>
            <span>아이디</span>
            <div className={`${styles.inputBox} ${styles.idInput}`}>
              <Input
                placeholder="아이디를 입력해주세요."
                value={value}
                onChange={onChange}
                size={{ width: "452px", height: "46px" }}
                errMessage="에러 메시지"
                variant="err"
              />
              {/* 텍스트 입력시 btnDel 버튼 활성화 */}
              <button type="button" className={styles.btnDel}>
                <span>삭제</span>
              </button>
            </div>
          </div>
          <div>
            <span>비밀번호</span>
            <div className={styles.inputBox}>
              <Password
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                size={{ width: "452px", height: "46px" }}
                variant="err"
                errMessage="에러 메시지"
              />
            </div>
          </div>
        </div>
        <div className={styles.btnBox}>
          <Button onClick={() => {}} color="primary" size="large">
            로그인
          </Button>
        </div>
      </div>
      <p className={styles.copyright}>
        © 2025 Innogrid. All rights reserved copyright.
      </p>
    </main>
  );
}
