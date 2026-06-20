export default function App() {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f3f4f6',
      color: '#111827'
    }}>
      <div style={{
        padding: '2rem',
        borderRadius: '1rem',
        background: 'white',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
      }}>
        <h1>Patient Portal</h1>
        <p>This is the patient portal frontend.</p>
      </div>
    </div>
  )
}
