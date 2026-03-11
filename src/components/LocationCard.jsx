export default function LocationCard({ name, address, phone, services }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '4px' }}>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{phone}</p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Std Hrs: 7:00 - 5:00 | On Call: 24/7</p>
      <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem', fontSize: '0.875rem' }}>
        {services.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  )
}
