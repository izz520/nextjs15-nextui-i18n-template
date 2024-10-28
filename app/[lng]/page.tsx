"use client"
import useClientTranslation from "@/hooks/useClientTranslation";
import useLanguage from "@/hooks/useLanguage";
import { Button } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  const { t } = useClientTranslation("common")
  const { changeLanguage } = useLanguage()
  return (
    <div >
      < ConnectButton />
      <Button color="primary">Hello Yasol</Button>
      <Button color="primary" onClick={() => changeLanguage("en")}>English</Button>
      <Button color="primary" onClick={() => changeLanguage("zh-CN")}>中文</Button>
      <Button color="primary" onClick={() => changeLanguage("zh-TW")}>繁体</Button>
      <h1>{t("back")}</h1>
    </div >
  );
}
