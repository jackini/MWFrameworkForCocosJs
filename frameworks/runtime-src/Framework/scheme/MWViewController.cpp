#include "MWViewController.h"
#include "MWGameScene.h"
#include "MWGameView.h"
#include "MWViewSegue.h"
#include <new>

using namespace cocos2d;
using namespace std;

MW_FRAMEWORK_BEGIN

MWViewController *MWViewController::create(MWViewSegue *segue)
{
    auto pVc = new (nothrow) MWViewController();
    if (pVc && pVc->init(segue)) {
        pVc->autorelease();
        return pVc;
    }
    CC_SAFE_RELEASE(pVc);
    return nullptr;
}

bool MWViewController::init(MWViewSegue *segue)
{
    _segue = segue;
    
    return true;
}

MWViewController::MWViewController()
: _scene(nullptr)
, _view(nullptr)
, _segue(nullptr)
, _identifer()
{
}

MWViewController::~MWViewController()
{
    CC_SAFE_RELEASE(_view);
}

void MWViewController::viewDidLoad()
{
    if (!_view) {
        _view = MWGameView::create();
        _view->retain();
    }
    
#if MW_ENABLE_SCRIPT_BINDING
    if (_scriptType == kScriptTypeLua) {
    } else if (_scriptType == kScriptTypeJavascript) {
        // js todo
    }
#endif
}

void MWViewController::viewDidUnload()
{
#if MW_ENABLE_SCRIPT_BINDING
    if (_scriptType == kScriptTypeLua) {
    } else if (_scriptType == kScriptTypeJavascript) {
        // js todo
    }
#endif
    
    if (_view && _view->getParent()) {
        _view->removeFromParent();
    }
}

void MWViewController::didReceiveMemoryWarning()
{
#if MW_ENABLE_SCRIPT_BINDING
    if (_scriptType == kScriptTypeLua) {
    } else if (_scriptType == kScriptTypeJavascript) {
        // js todo
    }
#endif
}

MW_FRAMEWORK_END