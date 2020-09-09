<?php

namespace App\Services\ReplaceTextService;

class Word
{

    public static function replace(string $search, string $replace, $text): string
    {
        return preg_replace('/\b(' . $search . ')\b/', $replace, $text);
    }

    public static function count(string $str, string $haystack): int
    {
        $matches = [];
        preg_match('/\b' . $str . '\b/', $haystack, $matches);

        return count($matches);
    }

    public static function explode(string $chunk): array
    {
        $matches = [];
        preg_match_all('/\b\w*\b/', $chunk, $matches);

        return ! empty($matches[0]) ? array_unique(array_filter($matches[0])) : [];
    }
}
