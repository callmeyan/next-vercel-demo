import {Editor} from "@tinymce/tinymce-react"
import React, {useEffect, useRef, useState} from "react"
import styles from './../../styles/post.module.scss'
import {request} from "../../service/request";
import logger from "../../service/logger";
import {Button, Input, message} from "antd";
import ArticleModel from "../../service/models/ArticleModel";
import {useRouter} from "next/router";

const editorInitConfig = {
    plugins: 'preview importcss searchreplace autolink autosave save directionality visualblocks visualchars '
        + 'fullscreen image link media code codesample table charmap pagebreak nonbreaking anchor lists wordcount help charmap quickbars emoticons',
    menubar: 'file edit view insert format tools table tc help',
    toolbar: 'code undo redo | bold italic underline strikethrough | fontfamily fontsize blocks '
        + '| alignleft aligncenter alignright alignjustify | outdent indent numlist bullist '
        + '| forecolor backcolor removeformat | pagebreak charmap emoticons | fullscreen  preview print | insertfile customInsertButton image media link anchor codesample',
    images_upload_url: '//file.wx.wm-app.xyz/up/index.php',
    powerpaste_allow_local_images: true,
    mobile: {
        theme: "mobile",
        toolbar: ["undo", "bold", "italic", "styleselect, restoredraft"],
    },

    // fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
    // image_dimensions: false,
    // contextmenu: "copy undo wordcount",
    // toolbar_sticky: true,
    // toolbar_sticky_offset: 108,
    // autosave_ask_before_unload: true,
    // autosave_interval: '30s',
    // autosave_prefix: '{path}{query}-{id}-',
    // autosave_restore_when_empty: false,
    // autosave_retention: '2m',
    branding: false,
}

const PostArticle: React.FC = () => {
    const router = useRouter()
    const editorRef = useRef<Editor>(null);
    const [title, setTitle] = useState<string>()
    const getCount = () => {
        const wc = editorRef.current?.editor.plugins.wordcount
        if (!wc) return 0;
        return wc.getCount() || 0;
    }
    const showContent = async () => {

        if (!editorRef.current) {
            message.error('编辑器异常')
            return;
        }
        const art: ArticleModel = {
            content: "",
            uid: 0,
            title
        }
        const word_count = getCount();
        try{
            const data = await request<{
                affectedRows:number;
                insertId:number;
            }>('/api/article', 'post', {
                title,
                description:'',
                content: editorRef.current?.editor.getContent(),
                word_count
            })
            if(data.affectedRows !== 1){
                throw Error('保存文章失败')
            }
            message.success('保存文章成功')
            await router.replace(`/article/${data.insertId}`)
        }catch (e){
            message.error(e.message)
        }

    }

    // @ts-ignore
    return <div className="container">
        <main>
            <section className={styles.formItem}>
                <Input onChange={e=>setTitle(e.target.value)} />
            </section>
            <section className={styles.formArticleContent}>
                <Editor
                    id="article_post_editor"
                    tinymceScriptSrc="https://cdn.staticfile.org/tinymce/6.4.2/tinymce.min.js"
                    ref={editorRef}
                    init={{
                        language: 'zh-Hans',
                        language_url: (process.env.PUBLIC_URL || '') + '/assets/tinymce/zh-Hans.js',
                        setup(editor) {
                            editor.ui.registry.addButton('customInsertButton', {
                                text: 'My Button',
                                onAction: (_) => editor.insertContent(`&nbsp;<strong>It's my button!</strong>&nbsp;`)
                            });

                        },
                        ...editorInitConfig
                    }}
                />
            </section>
            <section>
                <Button onClick={showContent}>get content</Button>
            </section>
        </main>
    </div>
}
export default PostArticle
