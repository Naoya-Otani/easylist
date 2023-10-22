import SearchBar from "../parts/Header/SearchBar";
import Cards from "../parts/index/Cards";
import TopText from "../parts/index/TopText";

const Index = () => {
  return (
    <div className="flex flex-col justify-center mt-6">
      <TopText />
      <div className="lg:hidden mt-12 mb-8">
        <SearchBar />
      </div>
      <Cards />
    </div>
  );
};

export default Index;
