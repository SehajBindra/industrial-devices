const PROTECTED_PATTERNS = [
  /\d+\.\d+/g,
  /Inc\./g,
  /Part-II\./g,
  /mtrs\./gi,
  /etc\./gi,
  /e\.g\./gi,
  /i\.e\./gi,
] as const;

function protectPatterns(text: string) {
  const replacements: { token: string; value: string }[] = [];

  let protectedText = text;

  for (const pattern of PROTECTED_PATTERNS) {
    protectedText = protectedText.replace(pattern, (match) => {
      const token = `__PROTECTED_${replacements.length}__`;
      replacements.push({ token, value: match });
      return token;
    });
  }

  return { protectedText, replacements };
}

function restorePatterns(text: string, replacements: { token: string; value: string }[]) {
  return replacements.reduce(
    (result, { token, value }) => result.replaceAll(token, value),
    text,
  );
}

function splitDescriptionPoint(point: string): string[] {
  if (!point.includes(".")) {
    return [point];
  }

  const { protectedText, replacements } = protectPatterns(point);
  const rawParts = protectedText.split(/\.\s+/);

  if (rawParts.length <= 1) {
    return [point];
  }

  const endsWithPeriod = point.trimEnd().endsWith(".");

  return rawParts.map((part, index) => {
    let sentence = restorePatterns(part, replacements).trim();
    const isLastPart = index === rawParts.length - 1;

    if (
      (isLastPart ? endsWithPeriod : true) &&
      !sentence.endsWith(".") &&
      !sentence.endsWith(":")
    ) {
      sentence += ".";
    }

    return sentence;
  });
}

export function splitDescriptionPoints(points: readonly string[]): string[] {
  return points.flatMap(splitDescriptionPoint);
}
