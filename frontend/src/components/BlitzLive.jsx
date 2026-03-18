import ChatFlow from './ChatFlow'

export default function BlitzLive({ config }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900">
      <ChatFlow config={config} />
    </div>
  )
}
