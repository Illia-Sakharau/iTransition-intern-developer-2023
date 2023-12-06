import AsciiTable from 'ascii-table'
import {randomBytes} from 'node:crypto';
import CryptoJS from 'crypto-js';


const EXP_CORRECT_ARGS = 'Example: node game.js Rock Paper Scissors',
      RULE_MESSAGE = 'Please run script only with odd number >=3 non-repeating strings',
      SEPARATOR = '-----------'


App();




function App() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    const errorMessage = `Sorry, but ${args.length} option(s) is not enough for the game :(`
    error(errorMessage);
  }
  if (args.length % 2 === 0) {
    const errorMessage = `Sorry, but you entered an even number of options - ${args.length} :(`
    error(errorMessage);
  }
  if (haveRepiteOptions(args)) {
    const errorMessage = `Sorry, but you entered repeated options :(`
    error(errorMessage);
  }
  
  game(args);
}



function game(args) {
  const pcMove = randomNumber(args.length);
  const [key, HMAC] = generateSecure(args[pcMove]);
  const stdin = process.openStdin();
  const userWinMap = createWinsMap(args.length);

  console.log(`HMAC: ${HMAC}`);
  showMenu(args);
  const value = stdin.on('data', (data)=>{
    const option = data.toString('ascii').trim();
    if (isDataCorrect(option, args.length)) {
      switch (option) {
        case '?':
          console.log(createTable(args, userWinMap));
          showMenu(args);
          break;
        case '0':
          wrapperedOutput(`It's a pity you didn't want to play ;(`);
          process.exit(0);         
        default:
          const finalMessage = createFinalMessage({
            winsMap: userWinMap, 
            userMove: +option - 1, 
            pcMove: pcMove,
          })
          console.log(`Your move: ${args[+data - 1]}`);
          console.log(`Computer move: ${args[pcMove]}`);
          console.log(finalMessage);
          console.log(`HMAC key: ${key}`);
          

          process.exit(0);
      }
    } else {
      wrapperedOutput(`Your move "${option}" is not correct, please follow the available moves!`);
      showMenu(args);
    }
  });
}



function showMenu(args) {
  console.log(`Available moves:`);
  args.forEach((arg, i) => {
    console.log(`${i+1} - ${arg}`);    
  });
  console.log(`0 - exit`);
  console.log(`? - help`); 
  process.stdout.write('Enter your move: ')
}



function isDataCorrect(option, maxNumOptions) {
    return (option === '?' 
            || (
                +option !== NaN
                && option !== ''
                && +option >= 0 
                && maxNumOptions >= +option
            ));
}



function error(errorMessage) {
  wrapperedOutput(errorMessage);
  console.log(RULE_MESSAGE);
  console.log(EXP_CORRECT_ARGS);
  process.exit(-1);
}



function wrapperedOutput(message) {
  console.log(SEPARATOR);
  console.log('> ', message);
  console.log(SEPARATOR);
}



function haveRepiteOptions(options) {
  const set = new Set(options);
  return set.size !== options.length
}



function createTable(options, winsMap) {
  var table = new AsciiTable('Rules')
  table.setHeading('v PC | User >', ...options);

  options.forEach((option, i) => {
    table.addRow(option, ...(winsMap[i]))
  })
   
  return table.toString()
}



function createWinsMap(elemCount) {
  const half = (elemCount - 1) / 2;
  const res = [];
  let truthfulnessArr = [...(Array(half).fill('Win')), ...(Array(half).fill('Lose'))];
  const shiftArr = [...truthfulnessArr].reverse();

  for (let i = 0; i < elemCount; i++) {
    res.push([...truthfulnessArr]);
    res[i].splice(i, 0, 'Draw')
    truthfulnessArr.unshift(shiftArr.shift());
    truthfulnessArr.pop()
  }

  return res;
}



function randomNumber(max) {  
  const min = 0;
  return Math.floor(Math.random() * (max - min) + min);
}



function createFinalMessage({winsMap, userMove, pcMove}) {
  const result = winsMap[pcMove][userMove]

  switch (result) {
    case 'Win':
      return 'You win!';
    case 'Lose':
      return 'You lose!';
    case 'Draw':
      return 'Draw!';
    default:
      return 'Something went wrong!';
  }
}



function generateSecure(pcMove) {
  const key = randomBytes(32).toString('hex');
  const HMAC = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA3(pcMove ,key));

  return [key, HMAC]
}
