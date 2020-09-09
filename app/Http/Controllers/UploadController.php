<?php

namespace App\Http\Controllers;

use App\Services\ReplaceTextService\ReplaceTextService;
use Illuminate\Http\Request;

class UploadController extends Controller
{

    /**
     * @var ReplaceTextService
     */
    private $replaceTextService;

    public function __construct(ReplaceTextService $replaceTextService)
    {
        $this->replaceTextService = $replaceTextService;
    }

    /**
     * Process text file
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function processTextFile(Request $request)
    {

        $file   = $request->file('text_file');
        $result = $this->replaceTextService
            ->processFile($file->openFile())
            ->getProcessedText();

        return response()->json([
            'data' => [
                'type'       => 'text',
                'attributes' => [
                    'word' => $this->replaceTextService->getWord(),
                    'count' => $this->replaceTextService->getWordCount(),
                    'text' => $result,
                ],
            ],
        ]);
    }

}
