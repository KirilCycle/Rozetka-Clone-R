

type CallbackFunctionVariadic = (...args: any[]) => void


export function handleClickonParent(e: React.MouseEvent<HTMLElement>, fn:CallbackFunctionVariadic ) {
    if ((e.target as HTMLTextAreaElement).className === e.currentTarget.className) { fn() }
  }
