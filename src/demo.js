import Quill from 'quill';
import TableModule from './index';

Quill.register(
    {
        [`modules/${TableModule.moduleName}`]: TableModule,
    },
    true
);
new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction

            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ['clean'],
            ['image', 'video'],
            ['table'],
        ],
        [`${TableModule.moduleName}`]: {
            size() {
                return {
                    row: 2,
                    col: 3,
                };
            },
            tableToolTip: {
                tipHeight: 12,
                disableToolNames: [],
            },
            operationMenu: {},
            selection: {
                primaryColor: '#0589f3',
            },
        },
    },
});
