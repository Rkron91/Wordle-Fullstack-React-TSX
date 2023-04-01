interface Props {
  wordLength: number;
  guess: string;
  word: string;
}

export function Guess({ wordLength, guess, word }: Props) {
  
  return (
    <div className="flex items-center justify-center">
      {new Array(wordLength).fill(0).map((_: string, i: number) => {
        const bg = guess[i] === word[i] 
        ? "bg-green-600" 
        : "bg-orange-400";

        return (
          <div
            className={`m-1 h-16 w-16 text-4xl font-bold ${bg} flex items-center justify-center`}
            key={i}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );


}