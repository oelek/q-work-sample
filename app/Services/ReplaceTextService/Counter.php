<?php

namespace App\Services\ReplaceTextService;

class Counter
{

    /**
     * @var array
     */
    private $counted = [];

    /**
     * @var int
     */
    private $max = 0;

    /**
     * @var string
     */
    private $maxName;

    public function getCounted(): array
    {
        return $this->counted;
    }

    public function getMaxCount(): int
    {
        return $this->max;
    }

    public function getMaxCountName(): string
    {
        return $this->maxName ?? '';
    }

    public function increase(string $name, int $count): void
    {
        if ( ! isset($this->counted[$name])) {
            $this->counted[$name] = 0;
        }

        $this->counted[$name] += $count;

        if ($this->counted[$name] > $this->max) {
            $this->max     = $this->counted[$name];
            $this->maxName = $name;
        }
    }
}
