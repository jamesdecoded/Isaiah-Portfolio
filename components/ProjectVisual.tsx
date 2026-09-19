'use client'

export type ProjectVisualVariant = 'rubric' | 'pipeline' | 'tests' | 'csv' | 'api'

function RubricVisual() {
  const rows = [
    { w: '70%', pass: true },
    { w: '55%', pass: true },
    { w: '80%', pass: false },
    { w: '45%', pass: true },
  ]
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x="10" y="10" width="180" height="100" rx="10" fill="rgba(255,255,255,0.12)" />
      {rows.map((row, i) => (
        <g key={i} transform={`translate(20, ${24 + i * 22})`}>
          <circle cx="6" cy="6" r="6" fill={row.pass ? '#4ade80' : '#f87171'} />
          <rect x="20" y="2" width={row.w} height="8" rx="4" fill="rgba(255,255,255,0.55)" />
        </g>
      ))}
    </svg>
  )
}

function PipelineVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {[30, 85, 140].map((x, i) => (
        <g key={i}>
          <rect x={x - 20} y="42" width="40" height="36" rx="8" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" />
          {i < 2 && (
            <path d={`M${x + 20} 60 L${x + 45} 60`} stroke="rgba(255,255,255,0.7)" strokeWidth="2" markerEnd="url(#arrow)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.7)" />
        </marker>
      </defs>
      <circle cx="30" cy="60" r="4" fill="white" opacity="0.9" />
      <rect x="75" y="55" width="20" height="10" rx="2" fill="white" opacity="0.9" />
      <path d="M130 52 L150 68 M150 52 L130 68" stroke="white" strokeWidth="2" opacity="0.9" />
    </svg>
  )
}

function TestsVisual() {
  const cells = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <text x="10" y="18" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="monospace">
        pytest -v
      </text>
      {cells.map((_, i) => {
        const col = i % 4
        const row = Math.floor(i / 4)
        const passed = i % 5 !== 4
        return (
          <rect
            key={i}
            x={16 + col * 44}
            y={30 + row * 28}
            width="34"
            height="20"
            rx="4"
            fill={passed ? 'rgba(74, 222, 128, 0.35)' : 'rgba(248, 113, 113, 0.4)'}
            stroke={passed ? '#4ade80' : '#f87171'}
          />
        )
      })}
    </svg>
  )
}

function CsvVisual() {
  const rows = 4
  const cols = 4
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x="16" y="14" width="168" height="92" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" />
      {Array.from({ length: rows + 1 }).map((_, r) => (
        <line key={`r${r}`} x1="16" y1={14 + r * 23} x2="184" y2={14 + r * 23} stroke="rgba(255,255,255,0.3)" />
      ))}
      {Array.from({ length: cols + 1 }).map((_, c) => (
        <line key={`c${c}`} x1={16 + c * 42} y1="14" x2={16 + c * 42} y2="106" stroke="rgba(255,255,255,0.3)" />
      ))}
      <rect x="16" y="14" width="168" height="23" fill="rgba(255,255,255,0.25)" />
    </svg>
  )
}

function ApiVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x="16" y="30" width="60" height="60" rx="10" fill="rgba(255,255,255,0.2)" />
      <rect x="124" y="30" width="60" height="60" rx="10" fill="rgba(255,255,255,0.2)" />
      <text x="46" y="65" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">client</text>
      <text x="154" y="65" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">API</text>
      <path d="M78 48 L122 48" stroke="#4ade80" strokeWidth="2" markerEnd="url(#req)" />
      <path d="M122 74 L78 74" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#res)" />
      <text x="100" y="42" textAnchor="middle" fill="#4ade80" fontSize="8">GET</text>
      <text x="100" y="88" textAnchor="middle" fill="#60a5fa" fontSize="8">200 OK</text>
      <defs>
        <marker id="req" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80" />
        </marker>
        <marker id="res" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#60a5fa" />
        </marker>
      </defs>
    </svg>
  )
}

const VARIANTS: Record<ProjectVisualVariant, () => JSX.Element> = {
  rubric: RubricVisual,
  pipeline: PipelineVisual,
  tests: TestsVisual,
  csv: CsvVisual,
  api: ApiVisual,
}

export default function ProjectVisual({ variant }: { variant: ProjectVisualVariant }) {
  const Visual = VARIANTS[variant]
  return <Visual />
}
