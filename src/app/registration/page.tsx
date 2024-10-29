import FormComponent from "../../components/Form/FormComponent";

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto pt-[50px]">
      <h1 className="mx-auto text-center block text-[32px] uppercase ">Rumah Dongeng Pelangi</h1>
      <h3 className="mx-auto text-center block text-[42px] font-bold"><span className="">Satu Kakak</span> <span className="">Satu Adik</span></h3>
      <article className="w-[380px] mx-auto py-5">
        <p> Harga tiket <b>Rp. 175,000/Orang</b> sudah termasuk: </p>
        <ol className="list-benefit pt-[8px]">
          <li>🍿 2 tiket nonton XXI Plaza Senayan</li>
          <li>🍿 2 snack (pop corn & soft drink)</li> 
          <li>🍿 2 lunch</li>
          <li>🍿 2 goodie bag</li>
          <li>🍿 Donasi untuk PA Van Der Steur</li>
          <li>🍿 free access untuk spot exhibition Little Mermaid Disney di Main Atrium & 4th floor bersama adik panti</li>
        </ol>
      </article>
      <div className="">
        <FormComponent />
      </div>
    </main>
  );
};

export default HomePage;