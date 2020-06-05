const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const TargetType = require('../../extension-support/target-type');
const formatMessage = require('format-message');
class SomeBlocks {
    constructor (runtime) {
        this.runtime = runtime;
    }
    getInfo () {
        return {
         
            id: 'someBlocks',

           
            color1: '#FF8C1A',
            color2: '#DB6E00',
            name: formatMessage({
                id: 'extensionName',
                defaultMessage: 'Some Blocks',
                description: 'The name of the "Some Blocks" extension'
            }),

          
            blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

     
            docsURI: 'https://....',

          
            blocks: [
                {
                   
                    opcode: 'myReporter', // becomes 'someBlocks.myReporter'

                  
                    blockType: BlockType.REPORTER,

                    
                    branchCount: 0,

                    terminal: true,

                  
                    blockAllThreads: false,

                    text: formatMessage({
                        id: 'myReporter',
                        defaultMessage: 'letter [LETTER_NUM] of [TEXT]',
                        description: 'Label on the "myReporter" block'
                    }),

                  
                    arguments: {
                       
                        LETTER_NUM: {
                          
                            type: ArgumentType.NUMBER,

                            
                            default: 1
                        },

                       
                        TEXT: {
                            
                            type: ArgumentType.STRING,

                                
                            default: formatMessage({
                                id: 'myReporter.TEXT_default',
                                defaultMessage: 'text',
                                description: 'Default for "TEXT" argument of "someBlocks.myReporter"'
                            })
                        }
                    },

                    
                    func: 'myReporter',

                   
                    filter: [TargetType.SPRITE]
                },
                {
                   
                }
            ],

            // Optional: define extension-specific menus here.
            menus: {
               
                menuA: [
                    
                    {
                        
                        value: 'itemId1',

                       
                        text: formatMessage({
                            id: 'menuA_item1',
                            defaultMessage: 'Item One',
                            description: 'Label for item 1 of menu A in "Some Blocks" extension'
                        })
                    },

                   
                    'itemId2'
                ],

               
                menuB: 'getItemsForMenuB',

                
                menuC: {
                    
                    acceptReporters: true,

                    
                    items: [/*...*/] || 'getItemsForMenuC'
                }
            },
    myReporter (args) {
       
        const message = formatMessage({
            id: 'myReporter.result',
            defaultMessage: 'Letter {LETTER_NUM} of {TEXT} is {LETTER}.',
            description: 'The text template for the "myReporter" block result'
        });

       
        const result = args.TEXT.charAt(args.LETTER_NUM);

        return message.format({
            LETTER_NUM: args.LETTER_NUM,
            TEXT: args.TEXT,
            LETTER: result
        });
    };
}
