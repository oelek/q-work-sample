<?php

namespace App\Services\ReplaceTextService;

use SplFileObject;

class ReplaceTextService
{

    /**
     * @var Counter
     */
    private $counter;

    /**
     * @var string
     */
    private $output = '';

    public function __construct(Counter $counter)
    {
        $this->counter = $counter;
    }

    public function processFile(SplFileObject $file)
    {
        foreach ($file as $line) {
            $this->countWords($line);
        }

        $word = $this->counter->getMaxCountName();

        if ($word === null) {
            return $this;
        }

        foreach ($file as $line) {
            $this->output .= Word::replace($word, 'foo' . $word . 'bar', $line);
        }

        return $this;
    }

    public function getProcessedText()
    {
        return $this->output;
    }

    public function getWord()
    {
        return $this->counter->getMaxCountName();
    }

    public function getWordCount()
    {
        return $this->counter->getMaxCount();
    }

    private function countWords($str)
    {
        $words = Word::explode($str);

        foreach ($words as $word) {
            if (! empty($word)) {
                $count = Word::count($word, $str);
                $this->counter->increase($word, $count);
            }
        }
    }
}
