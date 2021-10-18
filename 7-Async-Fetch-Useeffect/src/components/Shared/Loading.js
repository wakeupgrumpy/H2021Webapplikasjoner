import { CogIcon } from '@heroicons/react/outline'

const Loading = () => (
  <div className="flex flex-col space-y-4 items-center">
    <CogIcon className="animate-bounce h-10" />
    <p className="font-semibold text-xl">Loading...</p>
  </div>
)

export default Loading
