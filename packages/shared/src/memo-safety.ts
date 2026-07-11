export const isSuspiciousMemoOverwrite = (
  currentTitle: string | null,
  currentContentText: string,
  nextTitle: string | null,
  nextContentText: string
) => {
  const currentLength = currentContentText.trim().length;
  const nextLength = nextContentText.trim().length;
  const titleChanged = (currentTitle ?? "").trim() !== (nextTitle ?? "").trim();

  return titleChanged && currentLength >= 200 && nextLength < currentLength * 0.35;
};

export const isMemoEditBindingValid = (
  current: { memoId: string; revision: number; contentHash: string },
  session: { id: string; memoId: string; baseRevision: number; baseContentHash: string },
  request: { editSessionId: string; memoId: string; expectedRevision: number; expectedContentHash: string }
) =>
  request.memoId === current.memoId &&
  session.memoId === current.memoId &&
  request.editSessionId === session.id &&
  request.expectedRevision === current.revision &&
  session.baseRevision === current.revision &&
  request.expectedContentHash === current.contentHash &&
  session.baseContentHash === current.contentHash;
