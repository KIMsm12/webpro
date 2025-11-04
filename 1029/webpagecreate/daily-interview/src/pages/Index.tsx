const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700">
      <div className="text-center p-8">
        <h1 className="mb-6 text-5xl font-bold text-white drop-shadow-lg">
          🎯 랜덤 면접 질문 생성기
        </h1>
        <a
          href="/interview.html"
          className="inline-block px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          📝 면접 질문 생성기 시작하기
        </a>
      </div>
    </div>
  );
};

export default Index;
