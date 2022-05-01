import React,{useEffect,useState}from 'react'
import SudokuBox from './SudokuBox'
import Quotes from '../Quotes/Quotes'
import QuotesGenerator from '../Quotes/QuotesGenerator'
import Info from '../Info/Info'

const Sudoku = () => {

    const [sudo,setSudo]=useState([])
    const [soln,setSoln]=useState([])
    const [click,setClick]=useState([])
    const [check,setCheck]=useState(0)
    const [result,setResult]=useState(0)
    const [difficulty,setDifficulty]=useState(0.5)

    const quote = useState(QuotesGenerator())


    const getRandomPuzzle=()=>{
        setSudo([])
        setSoln([])
        setCheck(0)
        setResult(0)
        const solve=(puzzle)=>{
            for(let row=0;row<9;row++){
                for(let col=0;col<9;col++){
                    if(puzzle[row][col]===0){
                        for(let guess=1;guess<10;guess++){
                            if(valid(puzzle,row,col,guess)){
                                puzzle[row][col]=guess
                                if(solve(puzzle)){
                                    return true
                                }
                                puzzle[row][col]=0
                            }
                        }
                        return false
                    }
                }
            }
            return true

        }

        const valid=(puzzle,row,col,guess)=>{

            for(let i=0;i<9;i++){
                if(puzzle[i][col]==guess)return false
            }

            for(let j=0;j<9;j++){
                if(puzzle[row][j]==guess)return false
            }

            let gridRow = row-(row%3) 
            let gridCol = col-(col%3)

            for(let i=gridRow;i< (gridRow+3);i++){
                for(let j=gridCol;j<(gridCol+3);j++){
                    if(puzzle[i][j]==guess)return false
                }
            }
            return true
        }
    
        let puzzle = [...Array(9)].map(x=>Array(9).fill(0))

        puzzle[0][0]=Math.floor(Math.random()*8)+1
        puzzle[1][3]=Math.floor(Math.random()*8)+1
        puzzle[2][6]=Math.floor(Math.random()*8)+1

        puzzle[3][1]=Math.floor(Math.random()*8)+1
        puzzle[4][4]=Math.floor(Math.random()*8)+1
        puzzle[5][7]=Math.floor(Math.random()*8)+1

        puzzle[6][2]=Math.floor(Math.random()*8)+1
        puzzle[7][5]=Math.floor(Math.random()*8)+1
        puzzle[8][8]=Math.floor(Math.random()*8)+1

        let solvedPuzzle=solve(puzzle)

        let solvedOne=[...Array(9)].map(x=>Array(9).fill(0))
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                solvedOne[i][j]=puzzle[i][j]
            }
        }
        setSoln(solvedOne)
        if(solvedPuzzle){
            for(let i=0;i<9;i++){
                for(let j=0;j<9;j++){
                    if(Math.random()>difficulty)puzzle[i][j]=''
                }
            }
        }

        setSudo(puzzle)
    }

    const handleCheck=()=>{
        let su=0
        let sol=0
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(sudo[i][j]==soln[i][j]){
                    su++
                }else{
                    sol++
                }
            }
        }
        if(sol>0)setResult(0)
        else setResult(1)

        setCheck(1)

        setTimeout(()=>{
            setCheck(0)
        },2000)
    }

    //          HEADER      

    window.addEventListener('scroll',(e)=>{
        let top = document.documentElement.scrollTop
        let h = window.screen.height

        if(top>=20){
            const header = document.getElementById('header')
            header.classList.add('bg-white')
            header.classList.remove('bg-transparent')
            header.classList.add('shadow-lg')
            header.classList.add('text-black')
            header.classList.remove('text-white')
            header.classList.remove('text-transparent')


        }
        if(top<20){
            const header = document.getElementById('header')
            header.classList.add('bg-transparent')
            header.classList.remove('bg-white')
            header.classList.add('text-white')
            header.classList.add('shadow-lg')
            header.classList.remove('text-black')
            header.classList.remove('text-transparent')

        }
    })

    useEffect(()=>{
        let top = document.documentElement.scrollTop
        if(top>20){
            const header= document.getElementById('header')
            header.classList.add('shadow-lg')
            header.classList.add('text-black')
        }else{
            const header= document.getElementById('header')
            header.classList.add('shadow-lg')
            header.classList.add('text-white')
        }

    },[])


    useEffect(()=>{
        getRandomPuzzle()
    },[difficulty])

    

  return (
    <section className='min-h-screen flex flex-col  font-body items-center sudoku' >
        <h1 className='w-max font-digital text-white mt-24 my-6 text-xl md:text-3xl '>SUDOKU <Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} /> </h1>
        <div className='my-2 md:my-4'>
            <label className='text-lg md:text-xl text-white mx-2'>Difficulty</label>
            <select value={difficulty} onChange={(e)=>setDifficulty(e.target.value)} className='text-lg md:text-xl text-white px-1 border-b-2 py-1 outline-0 bg-transparent'>
                <option value={0.65}>Easy</option>
                <option value={0.5}>Mid</option>
                <option value={0.35}>Hard</option>
            </select>
        </div>
        <div className='p-4 py-6 md:p-8  border-4 rounded-md sha sudoku text-center'>
            <div className="grid grid-cols-9 gap-1">
                {sudo.map((row,r)=>row.map((col,c)=><SudokuBox value={col} difficulty={difficulty} setSudo={setSudo} sudo={sudo} row={r} col={c} click={click} key={c} check={check} setClick={setClick} soln={soln} />))}
            </div>
            <button className='px-4 py-2 mt-6 text-white md:text-xl text-lg md:mt-4 sha-sm uppercase outline-0 rounded-lg sudoku border-2 my-2'  onClick={()=>handleCheck()}>Check</button>
        </div>
        <Quotes quote={quote}/>
        
        {/*                 Pop Up           */}
        {<div className={`fixed bg-black/20 top-0 left-0 w-screen h-screen flex flex-col justify-center items-center  transition-all scale-0 ${result==1&&'scale-100'}`}>
            <div className='sudoku md:border-2 md:p-8 md:py-8 rounded-lg text-center'>
                <h1 className='md:text-2xl text-white uppercase m-2'>Well Done !!</h1>
                <h1 className='md:text-2xl text-white uppercase m-2'>You Solved It</h1>
                <button className='md:p-2 p-1  sudoku text-white border-2 mt-4 md:mt-10 bg-white rounded-lg mx-auto' onClick={()=>getRandomPuzzle()}>RETRY</button>
            </div>
        </div>}

    </section>
  )
}

export default Sudoku