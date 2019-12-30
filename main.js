const view = {
  hexNumber(hexValue) {
    let hexOutput = document.querySelector('#hex-input')
    hexOutput.setAttribute('value', hexValue)
  },

  hexColor(hexValue) {
    let hexBox = document.querySelector('#hex-box')

    hexBox.setAttribute('style', `background-color:${hexValue}`)
  }
}

const controller = {
  valueRgb() {
    const rValue = document.getElementById('r-input').value
    const gValue = document.getElementById('g-input').value
    const bValue = document.getElementById('b-input').value

    if (!isNaN(parseInt(rValue)) === false || parseInt(rValue) < 0 || parseInt(rValue) > 255) {
      alert('請輸入0 ~ 255 的數字')
      return
    } else if (!isNaN(parseInt(gValue)) === false || parseInt(gValue) < 0 || parseInt(gValue) > 255) {
      alert('請輸入0 ~ 255 的數字')
      return
    } else if (!isNaN(parseInt(bValue)) === false || parseInt(bValue) < 0 || parseInt(bValue) > 255) {
      alert('請輸入0 ~ 255 的數字')
      return
    } else {
      this.valueHex(rValue, gValue, bValue)
    }
  },

  valueHex(rValue, gValue, bValue) {
    rValue = parseInt(rValue).toString(16)
    if (rValue.length < 2) {
      rValue = '0' + rValue
    }

    gValue = parseInt(gValue).toString(16)
    if (gValue.length < 2) {
      gValue = '0' + gValue
    }

    bValue = parseInt(bValue).toString(16)
    if (bValue.length < 2) {
      bValue = '0' + bValue
    }

    const hexValue = `#${rValue}${gValue}${bValue}`

    view.hexNumber(hexValue)
    view.hexColor(hexValue)
  }
}