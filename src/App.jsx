import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [Height, setHeight] = useState('')
  const [Weight, setWeight] = useState('')
  const [isHeight, setIsHeight] = useState(true)
  const [isWeight, setIsWeight] = useState(true)
  const [BMI, setBmi] = useState(0)
  const [res, setRes] = useState('')

  const validate = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target
    console.log(name);
    console.log(value);

    if (!!value.match('^[0-9]*$')) {
      if (name == 'Height') {
        setHeight(value)
        setIsHeight(true)
      } else {
        setWeight(value)
        setIsWeight(true)
      }
    } else {
      if (name == 'Height') {
        setHeight(value)
        setIsHeight(false)
      } else {
        setWeight(value)
        setIsWeight(false)
      }

    }

  }

  const calculate = () => {
    const result = ((Weight / ((Height / 100) * (Height / 100))).toFixed(1))
    setBmi(result)

    if (result >= 30) {
      setRes('obese')
    } else if (result >= 25 && result <= 29.9) {
      setRes('Over weight')
    } else if (result >= 18.5 && result <= 24.9) {
      setRes('Healthy weight')
    } else {
      setRes('Under weight')
    }
  }


  const reset = () => {
    setHeight('')
    setWeight('')
    setBmi(0)

  }
  return (
    <>
      <div className='bg-dark w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='container bg-warning p-5 rounded-3 d-flex justify-content-center align-items-center' style={{ width: '520px' }}>
          <div className="row">
            <h1 className='text-center'>BMI calculator</h1>

            <div className='bg-light p-3 rounded-5 my-4 d-flex justifu-content-center align-items-center flex-column'>
              <h1>{BMI}</h1>
            </div>
            <p className='text-center'>{res}</p>

            <div className='d-flex justify-content-center'>
              <div className="mb-3">
                <TextField id="standard-basic" label="Height" name='Height' value={Height} variant="standard" onChange={(e) => { validate(e) }} />
                {isHeight == false &&
                  <p className='text-danger'>*Invalid input</p>
                }
              </div>

              <div className="mb-3 ms-4">
                <TextField id="standard-basic" label="Weight" name='Weight' value={Weight} variant="standard" onChange={(e) => { validate(e) }} />
                {isWeight == false &&
                  <p className='text-danger'>*Invalid input</p>
                }
              </div>
            </div>

            <div className='d-flex justify-content-center mt-2'>
              <Button variant="contained" color="success" onClick={calculate}>
                Calculate
              </Button>

              <Button variant="outlined" className='ms-3' onClick={reset} >Reset</Button>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
