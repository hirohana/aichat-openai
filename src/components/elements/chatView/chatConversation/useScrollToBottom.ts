import { useEffect, useRef } from "react";

const useScrollToBottom = () => {
  const divRef = useRef<HTMLDivElement>(null);

  // 要素を一番下にスクロールする関数
  function scrollToBottom() {
    if (divRef.current) {
      divRef.current.scrollTop =
        divRef.current.scrollHeight - divRef.current.clientHeight;
    }
  }

  // 初期読み込み時に一番下にスクロールする
  useEffect(() => {
    scrollToBottom();
  }, []);

  // 子要素が追加された時に自動スクロールする
  useEffect(() => {
    const currentRef = divRef.current;
    const handleScroll = () => {
      scrollToBottom();
    };
    if (currentRef) {
      currentRef.addEventListener("DOMNodeInserted", handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("DOMNodeInserted", handleScroll);
      }
    };
  }, []);

  return { divRef };
};

export { useScrollToBottom };
