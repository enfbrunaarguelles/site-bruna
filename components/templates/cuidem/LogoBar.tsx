const PAD = 63

export default function LogoBar() {
  return (
    <div style={{
      position: 'absolute',
      top: 0, left: PAD, right: PAD,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <img
        src="/cuidem/logo-strip.png"
        alt="Logos das instituições"
        style={{ width: '100%', height: 'auto', maxHeight: 80 }}
      />
    </div>
  )
}
