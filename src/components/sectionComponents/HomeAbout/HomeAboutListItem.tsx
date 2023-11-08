const HomeAboutListItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <li className="flex gap-3 items-center">
      <span className="p-2 h-8 w-8 bg-primary rounded-full flex justify-center items-center text-white text-icon">{icon}</span>
      <p className="text-body  font-semibold">{text}</p>
    </li>
  );
};

export default HomeAboutListItem;
