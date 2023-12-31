import StoryCard from "./StoryCard"

const stories = [
  {
    name: "Mike Peace",
    src: "https://links.papareact.com/13v",
    profile: "https://links.papareact.com/14v"
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4lx",
    profile: "https://links.papareact.com/kxx"
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/13v",
    profile: "https://links.papareact.com/f4p"
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/13v",
    profile: "https://links.papareact.com/sef"
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4y4",
    profile: "https://links.papareact.com/2vy"
  }, 
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3
    mx-auto">
    {stories.map(story => {
      <StoryCard 
      key={story.src} 
      name={story.name} 
      src={story.src} 
      profile={story.profile}
      />
    })}
    </div>
  )
}

export default Stories