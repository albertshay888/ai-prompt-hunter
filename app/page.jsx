import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Explore & Exchange
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> AI-Driven Prompts</span>
    </h1>
    <p className='desc text-center'>
      
Introducing PromptHunter, an innovative open-source tool designed for the contemporary world,
empowering users to explore, generate, and collaborate on imaginative prompts.
    </p>

    <Feed />
  </section>
);

export default Home;

