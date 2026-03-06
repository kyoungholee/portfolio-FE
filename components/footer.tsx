export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 text-center">
        <p className="font-semibold text-base text-foreground">
          포트폴리오 봐주셔서 감사합니다.
        </p>
        <div className="flex flex-col gap-0.5 text-base text-muted-foreground">
          <p>이메일 : dlrudgh1303@gmail.com</p>
          <p>연락처 : 010-6545-1303</p>
        </div>
        <p className="font-semibold text-base text-foreground">
          기다리고 있겠습니다.
        </p>
      </div>
    </footer>
  );
}
