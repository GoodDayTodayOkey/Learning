export default function profilerCb<T>(
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<T>,
) {
  console.log(
    'id', id,
    'phase', phase,
    'actualDuration', actualDuration,
    'baseDuration', baseDuration,
    'startTime', startTime,
    'commitTime', commitTime,
    'interactions', interactions,
  );
}
