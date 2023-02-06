import { useState, useEffect } from "react";

export function useWindowListener(eventType, listener) {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.addEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
