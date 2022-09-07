const Tag = ({ title }: { title: string }) => {
  return (
    <div className="max-w-2xl px-4 py-2 mx-auto mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div>{title}</div>
    </div>
  )
}

export default Tag;