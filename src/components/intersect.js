import Shape from 'clipper-js'

const intersect = ({ SUBJECT_PATHS, CLIP_PATHS } = {}) => {
  const subject = new Shape([SUBJECT_PATHS], true)
  const clip = new Shape([CLIP_PATHS], true)
  const result = subject.intersect(clip)
  return { PATHS: result.paths[0], CLOSED: result.closed }
}

export default intersect
