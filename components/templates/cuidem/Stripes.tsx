const STRIPE_W = 63
const COLOR = '#2A3A33'

export default function Stripes() {
  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: STRIPE_W, background: COLOR, zIndex: 10 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: STRIPE_W, background: COLOR, zIndex: 10 }} />
    </>
  )
}
