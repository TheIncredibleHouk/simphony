using System;
using System.Net.Sockets;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Collections.Specialized;

using Krystalware.UploadHelper;

namespace SimPhony
{
    public static class WebConverter
    {
        public static byte[] ConvertStepEdit(Edit edit, int region)
        {
            using (WebClient wc = new WebClient())
            {
                NameValueCollection formData = new NameValueCollection();

                ResetHeaders(wc);
                formData.Add("area_list", region.ToString());
                formData.Add("submit.x", "161");
                formData.Add("submit.y", "20");
                formData.Add("submit", "Next");
                wc.Headers[HttpRequestHeader.Referer] = "http://http://ddredit.konamionline.com/ddrse/edit/index.php";
                wc.UploadValues("http://ddredit.konamionline.com/ddrse/edit/series.php", formData);
                
                string cookie = wc.ResponseHeaders[HttpResponseHeader.SetCookie].Replace("; path=/", "").Split(',')[0];
                ResetHeaders(wc);
                wc.Headers[HttpRequestHeader.Referer] = "http://ddredit.konamionline.com/ddrse/edit/series.php";
                wc.Headers[HttpRequestHeader.Cookie] = cookie;
                formData.Clear();
                formData.Add("series_list", "11");
                formData.Add("refer", "send");
                wc.UploadValues("http://ddredit.konamionline.com/ddrse/edit/step1.php", formData);

                ResetHeaders(wc);
                wc.Headers[HttpRequestHeader.Referer] = "http://ddredit.konamionline.com/ddrse/edit/step1.php";
                wc.Headers[HttpRequestHeader.Cookie] = cookie;
                formData.Clear();
                formData.Add("music_list", "261");
                formData.Add("style_list", "1");
                formData.Add("refer", "send");
                wc.UploadValues("http://ddredit.konamionline.com/ddrse/edit/step2.php", formData);
                ResetHeaders(wc);
                wc.Headers[HttpRequestHeader.Referer] = "http://ddredit.konamionline.com/ddrse/edit/step2.php";
                wc.Headers[HttpRequestHeader.Cookie] = cookie;
                formData.Clear();
                formData.Add("level_list", "2");
                formData.Add("official_list", "1");
                formData.Add("agree_flag_1", "1");
                formData.Add("refer", "send");
                wc.UploadValues("http://ddredit.konamionline.com/ddrse/edit/edit.php", formData);
                ResetHeaders(wc);
                wc.Headers[HttpRequestHeader.Referer] = "http://ddredit.konamionline.com/ddrse/edit/edit.php";
                wc.Headers[HttpRequestHeader.Cookie] = cookie;
                formData.Clear();
                formData.Add("xmldata", String.Format("<STEPEDITOR><MUSIC><MUSIC_LINK_NUM>{0}</MUSIC_LINK_NUM><MUSIC_BASE_NAME/><MUSIC_NAME>AA</MUSIC_NAME><SCORE_STYLE>{5}</SCORE_STYLE><SCORE_DIFFICULTY>{4}</SCORE_DIFFICULTY><FOOTRATING>{1}</FOOTRATING><FINISH_NOTE_KIND>60</FINISH_NOTE_KIND><END_NOTE_KIND>61</END_NOTE_KIND><EDIT_NOTE_KIND>1</EDIT_NOTE_KIND><MUSIC_COUNT>60</MUSIC_COUNT><COMMENT1>{6}</COMMENT1><COMMENT2>{7}</COMMENT2><MUSIC_BPM>154</MUSIC_BPM><MUSIC_FLV>rtmp://fms.konamionline.com/vod/ddrse/aaaa2.flv</MUSIC_FLV></MUSIC><TIMING><NODE BC=\"0\" MC=\"13\" BPM=\"153.84615384615387\"/><NODE BC=\"16\" MC=\"1573\" BPM=\"154.0106951871658\"/><NODE BC=\"976\" MC=\"95073\"/></TIMING>{2}{3}</STEPEDITOR>",
                                        Convert.ToInt32(edit.SongID, 16),
                                        edit.Rating,
                                        edit.Steps,
                                        "",
                                        edit.Difficulty,
                                        edit.Style,
                                        edit.Comment1,
                                        edit.Comment2));
                byte[] response = wc.UploadValues("http://ddredit.konamionline.com/ddrse/edit/flash/save.php", "POST", formData);
                return response;
            }
        }

        private static void ResetHeaders(WebClient wc)
        {

            wc.Headers[HttpRequestHeader.Accept] = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
            wc.Headers[HttpRequestHeader.AcceptEncoding] = "gzip,deflate,sdch";
            wc.Headers[HttpRequestHeader.AcceptLanguage] = "en-US,en;q=0.8";
            wc.Headers[HttpRequestHeader.CacheControl] = "max-age=0";
            wc.Headers[HttpRequestHeader.ContentType] = "application/x-www-form-urlencoded";
            wc.Headers[HttpRequestHeader.Host] = "ddredit.konamionline.com";
            wc.Headers[HttpRequestHeader.UserAgent] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.112 Safari/535.1";
            wc.Headers[HttpRequestHeader.Expect] = "";
        }

        private static void ResetHeaders(HttpWebRequest wc)
        {

            wc.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
            wc.Headers[HttpRequestHeader.AcceptEncoding] = "gzip,deflate,sdch";
            wc.Headers[HttpRequestHeader.AcceptLanguage] = "en-US,en;q=0.8";
            wc.Headers[HttpRequestHeader.CacheControl] = "max-age=0";
            wc.Host = "ddredit.konamionline.com";
            wc.UserAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.112 Safari/535.1";
            wc.Expect = "";
            wc.Method = "POST";
            wc.Referer = "http://ddredit.konamionline.com/ddrse/library_manager/index.php";
            wc.Headers[HttpRequestHeader.AcceptCharset] = "ISO-8859-1,utf-8;q=0.7,*;q=0.3";
        }

        public static byte[] ConvertLibrary(string path, int regionCode)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("http://ddredit.konamionline.com/ddrse/library_manager/save.php");
            ResetHeaders(request);
            NameValueCollection formData = new NameValueCollection();
            formData.Add("area_list", regionCode.ToString());
            formData.Add("MAX_FILE_SIZE", "8158484");
            UploadFile[] files = new UploadFile[1];
            files[0] = new UploadFile(path, "upfile", "application/octet-stream");
            HttpWebResponse response = HttpUploadHelper.Upload(request, files, formData);
            Stream s = response.GetResponseStream();
            byte[] output = new byte[247040];
            s.Read(output, 0, output.Length);
            return output;
        }

        //private static void GenerateZip(EditLibrary library, string file)
        //{
        //    using (ZipFile zip = new ZipFile(Encoding.UTF8))
        //    {
        //        foreach (var s in library.Edits)
        //        {
        //            if (File.Exists(s.FileName))
        //            {
        //                zip.AddFile(s.FileName, "");
        //            }
        //            zip.Save(file);
        //        }
        //    }
        //}
    }
}
