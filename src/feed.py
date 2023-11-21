import yaml;
import xml.etree.ElementTree as xml_tree;
with open('feed.yaml','r') as file:
    yaml_data = yaml.safe_load(file)

    rss_element = xml_tree.Element('rss' ,{
    'version':'2.0'
    })
    channel_element = xml_tree.SubElement(rss_element,'channel')
    xml_tree.SubElement(channel_element,'tittle').text = yaml_data['title']
    output_tree = xml_tree.ElementTree(rss_element)
    output_tree.write('podcast.xml',encoding='UTF-8',xml_declaration=True)