const INITIAL_DELAY_MILLIS = 500;
const TYPE_DELAY_MILLIS = 80;
const WHITESPACE_DELAY_MILLIS = 120;
const PUNCTUATION_DELAY_MILLIS = 300;
const MAX_DELTA_DELAY_MILLIS = 50;

class TypeWriter
{
  constructor(text)
  {
    this._text = text;
    this._displayText = "";
    this._index = 0;

    this.onTypeUpdate = this.onTypeUpdate.bind(this);

    this._timer = setTimeout(this.onTypeUpdate, INITIAL_DELAY_MILLIS);
  }

  reset()
  {
    this._displayText = "";
    this._index = 0;
    this._timer = setTimeout(this.onTypeUpdate, INITIAL_DELAY_MILLIS);
  }

  stop()
  {
    clearTimeout(this._timer);
  }

  onTypeUpdate()
  {
    ++this._index;

    if (this._index >= this._text.length)
    {
      this.stop();
      this._displayText = this._text;
    }
    else
    {
      const nextChar = this._text[this._index - 1];
      if (/\s/.test(nextChar))
      {
        this._timer = setTimeout(this.onTypeUpdate, WHITESPACE_DELAY_MILLIS);
      }
      else if (/[.,\/#!?$%\^&\*;:{}=\-_`~()]/.test(nextChar))
      {
        this._timer = setTimeout(this.onTypeUpdate, PUNCTUATION_DELAY_MILLIS);
      }
      else
      {
        this._timer = setTimeout(this.onTypeUpdate, TYPE_DELAY_MILLIS);
      }
      this._displayText = this._text.substring(0, this._index) + '_';
    }
  }

  getText()
  {
    return this._text;
  }

  getDisplayText()
  {
    return this._displayText;
  }
}

export default TypeWriter;
