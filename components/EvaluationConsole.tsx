'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, Circle, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

type RubricItem = {
  label: string
  verdict: 'pass' | 'fail'
}

type Scenario = {
  task: string
  submission: string[]
  rubric: RubricItem[]
  score: string
  verdict: string
}

const SCENARIOS: Scenario[] = [
  {
    task: 'Benchmark: reverse a linked list in-place',
    submission: [
      'def reverse(head):',
      '    prev = None',
      '    while head:',
      '        head.next, prev, head = prev, head, head.next',
      '    return prev',
    ],
    rubric: [
      { label: 'Correctness on provided test cases', verdict: 'pass' },
      { label: 'Handles empty / single-node input', verdict: 'pass' },
      { label: 'O(n) time, O(1) space', verdict: 'pass' },
      { label: 'Follows instruction: in-place only', verdict: 'pass' },
    ],
    score: '9.4 / 10',
    verdict: 'PASS',
  },
  {
    task: 'Benchmark: summarize a support ticket',
    submission: [
      '"The customer is frustrated because the',
      ' invoice total doesn\'t match their receipt.',
      ' Recommend a full refund immediately."',
    ],
    rubric: [
      { label: 'Captures core issue accurately', verdict: 'pass' },
      { label: 'Stays within source facts (no fabrication)', verdict: 'fail' },
      { label: 'Neutral, non-prescriptive tone', verdict: 'fail' },
      { label: 'Length within rubric limit', verdict: 'pass' },
    ],
    score: '5.1 / 10',
    verdict: 'NEEDS REVISION',
  },
]

export default function EvaluationConsole() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [visibleRubric, setVisibleRubric] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const scenario = SCENARIOS[scenarioIdx]

  useEffect(() => {
    setVisibleRubric(0)
    setShowScore(false)

    const rubricTimers = scenario.rubric.map((_, i) =>
      setTimeout(() => setVisibleRubric(i + 1), 900 + i * 700)
    )
    const scoreTimer = setTimeout(
      () => setShowScore(true),
      900 + scenario.rubric.length * 700 + 400
    )
    const nextTimer = setTimeout(() => {
      setScenarioIdx((prev) => (prev + 1) % SCENARIOS.length)
    }, 900 + scenario.rubric.length * 700 + 4500)

    return () => {
      rubricTimers.forEach(clearTimeout)
      clearTimeout(scoreTimer)
      clearTimeout(nextTimer)
    }
  }, [scenarioIdx])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto mt-16 mb-4"
    >
      <div className="glass rounded-2xl overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden pointer-events-none">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan" />
        </div>

        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-300/30 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs font-mono text-gray-500 dark:text-gray-400">
            evaluation_console.py — live
          </span>
          <Sparkles size={14} className="ml-auto text-blue-500 dark:text-blue-400" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={scenarioIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 font-mono text-sm"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-3">
              <span className="text-purple-500 dark:text-purple-400">task&gt;</span> {scenario.task}
            </p>

            <div className="rounded-xl bg-black/[0.04] dark:bg-white/[0.04] p-3 mb-4 text-gray-700 dark:text-gray-300 overflow-x-auto">
              {scenario.submission.map((line, i) => (
                <div key={i} className="whitespace-pre text-xs md:text-sm">{line}</div>
              ))}
            </div>

            <div className="space-y-2 mb-3">
              {scenario.rubric.map((item, i) => {
                const revealed = i < visibleRubric
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={revealed ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -10 }}
                    className="flex items-center gap-2 text-xs md:text-sm"
                  >
                    {!revealed ? (
                      <Circle size={16} className="text-gray-400 flex-shrink-0" />
                    ) : item.verdict === 'pass' ? (
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle size={16} className="text-red-500 flex-shrink-0" />
                    )}
                    <span className={revealed ? '' : 'text-gray-400'}>{item.label}</span>
                  </motion.div>
                )
              })}
            </div>

            <AnimatePresence>
              {showScore && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-between pt-3 border-t border-gray-300/30 dark:border-white/10"
                >
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    rubric score
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      scenario.verdict === 'PASS'
                        ? 'bg-green-500/15 text-green-600 dark:text-green-400'
                        : 'bg-orange-500/15 text-orange-600 dark:text-orange-400'
                    }`}
                  >
                    {scenario.score} · {scenario.verdict}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            {!showScore && <span className="inline-block w-2 h-4 bg-blue-500 animate-blink align-middle" />}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
        A simplified simulation of how I score AI outputs against a rubric — this is the actual work, not just a description of it.
      </p>
    </motion.div>
  )
}
