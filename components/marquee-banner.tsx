export default function MarqueeBanner() {
  return (
    <div className="bg-purple py-3 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex items-center space-x-4">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <span className="text-dark-bg font-bold whitespace-nowrap">BUILD SOMETHING GREAT TOGETHER</span>
                <span className="text-2xl">✦</span>
                <span className="text-dark-bg font-bold whitespace-nowrap">創造的</span>
                <span className="text-2xl">✦</span>
              </div>
            ))}
        </div>
        <div className="marquee-content flex items-center space-x-4">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <span className="text-dark-bg font-bold whitespace-nowrap">BUILD SOMETHING GREAT TOGETHER</span>
                <span className="text-2xl">✦</span>
                <span className="text-dark-bg font-bold whitespace-nowrap">創造的</span>
                <span className="text-2xl">✦</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
