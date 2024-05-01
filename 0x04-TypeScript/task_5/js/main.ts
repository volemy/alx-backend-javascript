interface MajorCredits {
  readonly type: 'major';
  readonly __brand: 'MajorCredits';
  credits: number;
}

interface MinorCredits {
  readonly type: 'minor';
  readonly __brand: 'MinorCredits';
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { type: 'major', __brand: 'MajorCredits', credits: subject1.credits + subject2.credits };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { type: 'minor', __brand: 'MinorCredits', credits: subject1.credits + subject2.credits };
}
