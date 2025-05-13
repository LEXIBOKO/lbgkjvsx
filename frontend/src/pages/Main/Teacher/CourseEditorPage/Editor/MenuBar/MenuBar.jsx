import {useCurrentEditor} from "@tiptap/react";
import React from "react";
import './MenuBar.css'
import {
    BoldOutlined, DashOutlined, HighlightOutlined,
    ItalicOutlined, MinusOutlined,
    OrderedListOutlined, RedoOutlined,
    StrikethroughOutlined, UndoOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";
import {Button, Select, Tooltip} from "antd";



const MenuBar = () => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    return (
        <div className="control-group">
            <div className="button-group">
                <Tooltip title={'Полужирный'}>
                    <Button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleBold()
                                .run()
                        }
                        className={editor.isActive('bold') ? 'is-active' : ''}
                    >
                        <BoldOutlined/>
                    </Button>
                </Tooltip>

                <Tooltip title={'Курсив'}>
                    <Button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleItalic()
                                .run()
                        }
                        className={editor.isActive('italic') ? 'is-active' : ''}
                    >
                        <ItalicOutlined/>
                    </Button>
                </Tooltip>

                <Tooltip title={'Зачеркнутый'}>
                    <Button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleStrike()
                                .run()
                        }
                        className={editor.isActive('strike') ? 'is-active' : ''}
                    >
                        <StrikethroughOutlined/>
                    </Button>
                </Tooltip>

                <hr/>

                <Tooltip title={'Заголовок 1'}>
                    <Button
                        onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                        className={editor.isActive('heading', {level: 1}) ? 'is-active' : ''}
                    >
                        H1
                    </Button>
                </Tooltip>

                <Tooltip title={'Заголовок 2'}>
                    <Button
                        onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                        className={editor.isActive('heading', {level: 2}) ? 'is-active' : ''}
                    >
                        H2
                    </Button>
                </Tooltip>

                <Tooltip title={'Заголовок 3'}>
                    <Button
                        onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                        className={editor.isActive('heading', {level: 3}) ? 'is-active' : ''}
                    >
                        H3
                    </Button>
                </Tooltip>
                <Tooltip title={'Заголовок 4'}>
                    <Button
                        onClick={() => editor.chain().focus().toggleHeading({level: 4}).run()}
                        className={editor.isActive('heading', {level: 4}) ? 'is-active' : ''}
                    >
                        H4
                    </Button>
                </Tooltip>

                <hr/>
                <Button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                    contextMenu={'bulletList'}
                >
                    <UnorderedListOutlined/>
                    Bullet list
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    <OrderedListOutlined/>
                    Ordered list
                </Button>


                <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <MinusOutlined/>
                    Add divider
                </Button>

                <hr/>

                <Button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    <UndoOutlined/>
                    Undo
                </Button>
                <Button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    <RedoOutlined/>
                    Redo
                </Button>
                <Button
                    onClick={() => editor.chain().focus().setColor('#ff220c').run()}
                    className={editor.isActive('textStyle', {color: '#ff220c'}) ? 'is-active' : ''}
                >
                    <HighlightOutlined />
                    Red
                </Button>
            </div>
        </div>
    )
}

export default MenuBar
