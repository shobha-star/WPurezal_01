import { ImageResponse } from 'next/og'

export const size = {
  width: 16,
  height: 16,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 10,
          background: 'linear-gradient(135deg, #00C853, #64DD17)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0B0F0C',
          borderRadius: '50%',
          fontWeight: 'bold',
        }}
      >
        P
      </div>
    ),
    {
      ...size,
    }
  )
}
